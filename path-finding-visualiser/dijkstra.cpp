#include <SFML/Graphics.hpp>
#include <SFML/Window.hpp>
#include <iostream>
#include <queue>
#include <vector>
#include <float.h>
#include <string>
#include <sstream>
using namespace std;
using namespace sf;

// number of rows and cols (n * n)
#define n 60

// 8 directions to explore from all points
vector<int> dx{-1, -1, 0, 1, 1, 1, 0, -1};
vector<int> dy{0, 1, 1, 1, 0, -1, -1, -1};

// in case of only 4 directions
// vector<int> dx{1, -1, 0, 0};
// vector<int> dy{0, 0, 1, -1};

// to store the shortest path
vector<pair<int,int> > destPath;

// travel for the unvisited cells
bool visited[n][n];

// storing the min path cost
float cost;

// ********************** VALIDATION FUNCTION ***********************

// function to validate the current cocordinates
bool isValid(int grid[n][n], int x, int y)
{
    return grid[x][y] == 1 && visited[x][y] == 0;
}

// ********************** TO DISPLAY THE CURRENT COORDINATES AND FINAL COST ***********************

void findPath(pair<int, int> parent[n][n], float distance[n][n], int xStart, int yStart, int xEnd, int yEnd)
{
    cost = distance[xEnd][yEnd];
    cout<<"the shortest distance from start to end is "<<cost<<endl;

    // as long as destination is not reached, print the current coordinats
    while(parent[xEnd][yEnd].first != xStart || parent[xEnd][yEnd].second != yStart)
    {
        // adding delay of 10 ms for path visualisation
        sleep(milliseconds(10));

        int x = parent[xEnd][yEnd].first;
        int y = parent[xEnd][yEnd].second;
        cout<<"visiting x-coordinate : "<<x<<" and y-coordinate "<<y<<endl;
        destPath.push_back({x, y});
        int currX = xEnd;
        int currY = yEnd;
        xEnd = parent[currX][currY].first;
        yEnd = parent[currX][currY].second;
    }
}

// ********************** DIJKSTRA'S ALGO ***********************

void dijkstra(int grid[n][n], int xStart, int yStart, int xEnd, int yEnd)
{
    // to keep track of the minimum distance from source cell to any cell
    float distance[n][n];
    for(int i=0;i<n;i++)
    {
        for(int j=0;j<n;j++)
        {
            distance[i][j] = FLT_MAX;
        }
    }
    // to store the current cells in the path
    pair<int, int> parent[n][n];

    // for greedy algorithm, we use min heap to store the {distance of cell, x coordinate, y coordinate}
    priority_queue<pair<float, pair<int, int> >, vector<pair<float, pair<int, int> > >, greater<pair<float, pair<int, int> > > > pq;

    distance[xStart][yStart] = 0.0;
    pq.push({distance[xStart][yStart], {xStart, yStart}});

    // applying BFS
    while(!pq.empty())
    {
        float celldistance = pq.top().first;
        int x = pq.top().second.first;
        int y = pq.top().second.second;
        pq.pop();

        // mark current as visited
        visited[x][y] = true;

        // if we reach the destination, just come out of BFS
        if(visited[xEnd][yEnd])
        break;

        // adding delay of 1 ms for exploration
        sleep(milliseconds(1));

        // looking in all 8 directions
        for(int i=0;i<8;i++)
        {
            int newX = x + dx[i];
            int newY = y + dy[i];
            if(isValid(grid, newX, newY))
            {
                if(distance[newX][newY] > celldistance + 1.0)
                {
                    distance[newX][newY] = celldistance + 1.0;
                    pq.push({distance[newX][newY], {newX, newY}});
                    parent[newX][newY] = {x, y};
                    // cout<<parent[newX][newY].first<<" "<<parent[newX][newY].second<<endl;
                }
            }
        }
    }
    findPath(parent, distance, xStart, yStart, xEnd, yEnd);
}

// ********************** MAIN ***********************

int main()
{
    // the map for exploration
    int grid[n][n];   

    // filled matrix will indicate whether the cells have been explored or not
    int filled[n][n];

    // adding walls
    for(int i=0;i<n;i++)
    {
        for(int j=0;j<n;j++)
        {
            if(i == 0 || i == n - 1 || j == 0 || j == n - 1)
            grid[i][j] = 0;
            else
            grid[i][j] = 1;
        }
    }

    // initially, all are uncolored && unvisited
    for(int i=0;i<n;i++)
    {
       for(int j=0;j<n;j++)
        {
           visited[i][j] = false;
           filled[i][j] = 0;
        }
    }

    // calling Dijkstra function
    int xStart = 2, yStart = 2, xEnd = 45, yEnd = 46;
    Thread threadD(std::bind(&dijkstra, grid, xStart, yStart, xEnd, yEnd));

    RenderWindow window(VideoMode(1600, 1200), "Path Finding Visualiser");
    // Text
    Font font;
    font.loadFromFile("arial.ttf");
    Text text1("Get Path", font, 30);

    // Shapes and configs

    // get path button
    RectangleShape startButton(Vector2f(150, 50));
    startButton.setFillColor(Color(230,230,250)); // lavender
    text1.setFillColor(Color(106,90,205)); // slate blue	

    // default color of cells
    RectangleShape rectangle(Vector2f(20, 20));
    rectangle.setFillColor(Color::White);

    // obstacle cells
    RectangleShape obstacleGrid(Vector2f(20, 20));
    obstacleGrid.setFillColor(Color(65,105,225)); // royal blue	

    // path cells
    RectangleShape pathGrid(Vector2f(20, 20));
    pathGrid.setFillColor(Color(124,252,0)); // lawn green	
    pathGrid.setOutlineThickness(2);
    pathGrid.setOutlineColor(Color(0,0,128)); // navy

    // starting cell
    RectangleShape startGrid(Vector2f(20, 20)); 
    startGrid.setFillColor(Color(128,0,128)); // purple
    startGrid.setOutlineThickness(2);
    startGrid.setOutlineColor(Color(65,105,225)); // royal blue

    // ending cell
    RectangleShape endGrid(Vector2f(20, 20)); 
    endGrid.setFillColor(Color(255,105,180)); // hot pink	
    endGrid.setOutlineThickness(2);
    endGrid.setOutlineColor(Color(255,20,147)); // deep pink	

    // visited cells
    RectangleShape visitedGrid(Vector2f(20, 20));
    visitedGrid.setFillColor(Color(255,250,205)); // lemon chiffon	

    // Display
    while(window.isOpen())
    {
        Event event;
        while(window.pollEvent(event))
        {
            if(event.type == Event::Closed)
                window.close();
            if(event.type == Event::KeyPressed && event.key.code == Keyboard::Space)
                window.close();
            if(event.type == Event::MouseButtonPressed && event.mouseButton.button == Mouse::Left){
                int X = event.mouseButton.x;
                int Y = event.mouseButton.y;
                int row = Y / 20;       //Reversed notion of row & column
                int col = X / 20;
                if(grid[row][col] == 0 && row < 60 && col < 60)
                grid[row][col] = 1;
                else if(row < 60 && col < 60)
                grid[row][col] = 0;
                if(row < 60 && col < 60)
                cout<<"Cell "<<row<<" , "<<col<<" state is: "<<grid[row][col]<<endl;
                if(X > 1200 && X < 1350 && Y > 0 && Y < 50)
                {
                    threadD.launch();
                }
            }
        }

        window.clear();
        startButton.setPosition(1200, 0);
        window.draw(startButton);       //Dijkstra launch
        text1.setPosition(1200, 0);     //Dijkstra text
        window.draw(text1);             //cost text
        stringstream ss1;
        ss1<<destPath.size();           //int to string
            
        if(!destPath.empty())
        {
            for(int i=0;i<int(destPath.size());i++)
            {
                // Reversed notion of row & column
                pathGrid.setPosition(destPath[i].second * 20, destPath[i].first * 20);
                // final destPath
                window.draw(pathGrid);  
                filled[destPath[i].first][destPath[i].second] = 1;
            }
        }

        startGrid.setPosition(yStart * 20, xStart * 20);
        window.draw(startGrid);     // source
        filled[xStart][yStart] = 1;
        endGrid.setPosition(yEnd * 20, xEnd * 20);
        window.draw(endGrid);       // destination
        filled[xEnd][yEnd] = 1;

        for(int i=0;i<=1180 ;i += 20)
        {
            for(int j=0;j<=1180;j += 20)
            {
                if(grid[i / 20][j / 20] == 0)
                {
                    obstacleGrid.setOutlineThickness(2);
                    obstacleGrid.setOutlineColor(Color(135,206,235));
                    obstacleGrid.setPosition(j,i);

                    // User's obstacle
                    window.draw(obstacleGrid);        
                }
                if(visited[i / 20][j / 20] == true && filled[i / 20][j / 20] == 0)
                {
                    visitedGrid.setOutlineThickness(2);
                    visitedGrid.setOutlineColor(Color(0,0,128));
                    visitedGrid.setPosition(j, i);

                    // Explored Cells by dijkstra
                    window.draw(visitedGrid);        
                }
                if(grid[i / 20][j / 20] == 1 && visited[i / 20][j / 20] == false && filled[i / 20][j / 20] == 0)
                {   // not in dijkstra
                    rectangle.setOutlineThickness(2);
                    rectangle.setOutlineColor(Color(135,206,235));
                    rectangle.setPosition(j, i);

                    // default white cells
                    window.draw(rectangle);     
                }
            }
        }   

        sf::Text text2("the cost is " + to_string(cost), font, 30);
        text2.setPosition(1200, 60);       // cost text
        window.draw(text2);
        window.display();
    }
    return 0;
}
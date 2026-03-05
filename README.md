# NGINX Load Balancing Demo

This project demonstrates **load balancing using NGINX** with two Node.js backend servers.

The experiment shows how NGINX distributes incoming requests between multiple backend servers and how different load balancing algorithms affect traffic distribution.

---

## Project Structure
load-balance-demo
│
├── server1
│ └── index.js (Slow server - Port 3000)
│
├── server2
│ └── index.js (Fast server - Port 3001)
│
├── package.json
├── package-lock.json
└── .gitignore

---

## Technologies Used

- Node.js
- Express.js
- NGINX
- Git
- GitHub

---

## Architecture
Client Browser
│
│
NGINX :8081
│
┌────┴────┐
│ │
Server1 Server2
Port 3000 Port 3001
(Slow) (Fast)

---

## Backend Servers

### Server 1 (Slow Server)

Runs on **Port 3000** and intentionally delays the response by 5 seconds.

Example code:

```javascript
setTimeout(() => {
    res.send("Slow Server - Port 3000");
}, 5000);
Server 2 (Fast Server)

Runs on Port 3001 and responds immediately.

Example code:res.send("Fast Server - Port 3001");
NGINX Load Balancer Configuration
upstream myapp {
    server localhost:3000;
    server localhost:3001;
}

server {
    listen 8081;

    location / {
        proxy_pass http://myapp;
    }
}
Load Balancing Algorithms
1. Round Robin (Default)

Requests are distributed alternately between servers.

Example:
Request 1 → Server 3000
Request 2 → Server 3001
Request 3 → Server 3000
Request 4 → Server 3001
2. Least Connections

NGINX sends requests to the server with the fewest active connections.

Configuration:
upstream myapp {
    least_conn;
    server localhost:3000;
    server localhost:3001;
}
Since server 3000 is slow, most traffic will go to server 3001.
Running the Project
Start Server 1
cd server1
node index.js
Start Server 2
cd server2
node index.js
Access Through Load Balancer

Open browser:http://localhost:8081
Expected Output

With Round Robin:Slow Server - Port 3000
Fast Server - Port 3001
Slow Server - Port 3000
Fast Server - Port 3001
With Least Connections:
Fast Server - Port 3001
Fast Server - Port 3001
Fast Server - Port 3001
Purpose of the Experiment

Understand NGINX as a reverse proxy

Demonstrate load balancing

Compare Round Robin vs Least Connections

Improve system scalability and performance
Author

Sasmita Das
Open Source Technologies Lab Experiment

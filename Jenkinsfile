pipeline {
    agent any
    tools { nodejs "Node24" }
    environment {
        APP_PORT = 5000
        REACT_PORT = 5173
    }
    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/viveka941/schoolApplication.git'
            }
        }
        stage('Install Dependencies') {
            steps {
                // Backend dependencies
                dir('backend') {
                    sh 'npm install'
                }
                // Frontend dependencies
                dir('frontend') {
                    sh 'npm install'
                }
            }
        }
        stage('Build React') {
            steps {
                dir('frontend') {
                    sh 'npm run build'
                }
            }
        }
        stage('Test') {
            steps {
                // Run backend tests
                dir('backend') {
                    sh 'npm test'
                }
                // Run frontend tests
                dir('frontend') {
                    sh 'npm test'
                }
            }
        }
        stage('Deploy Backend') {
            steps {
                dir('backend') {
                    sh 'pm2 stop backend || true'
                    sh 'pm2 start server.js --name "backend"'
                }
            }
        }
        stage('Deploy Frontend') {
            steps {
                dir('frontend/build') {
                    // Serve React build (install serve globally first)
                    sh 'npx serve -s -l 5173 &'
                }
            }
        }
    }
}
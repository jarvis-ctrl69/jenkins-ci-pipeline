pipeline {
    agent any

    tools {
        nodejs 'NodeJS-22'
    }

    stages {
        stage('Build') {
            steps {
                echo 'Starting Node.js Build...'
                sh 'npm install'
                sh 'npm run build'
            }
        }

        stage('Test') {
            steps {
                echo 'Running Automated Tests...'
                sh 'npm test'
            }
        }
    }

    post {
        success {
            echo 'BUILD AND TEST SUCCESSFUL!'
        }

        failure {
            echo 'BUILD OR TEST FAILED!'
        }

        always {
            echo 'CI Pipeline Execution Completed.'
        }
    }
}
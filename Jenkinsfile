pipeline {
    agent any

    environment {
        AWS_REGION = 'us-east-1b' // Replace with your AWS region
    }

    stages {
        stage('Checkout Code') {
            steps {
                echo 'Cloning repository...'
                git branch: 'main', url: 'https://github.com/sachii4488/DevOps-Project.git' // Replace with your GitHub repo URL
            }
        }

        stage('Terraform Init & Apply') {
            steps {
                echo 'Setting up infrastructure with Terraform...'
                sh '''
                cd terraform
                terraform init
                terraform apply -auto-approve
                '''
            }
        }

        stage('Ansible Configuration') {
            steps {
                echo 'Configuring EC2 instances with Ansible...'
                sh '''
                cd ansible
                ansible-playbook -i inventory setup.yml
                '''
            }
        }

        stage('Build Docker Images') {
            steps {
                echo 'Building Docker images...'
                sh '''
                cd docker
                docker build -t frontend ./frontend
                docker build -t backend ./backend
                '''
            }
        }

        stage('Deploy Containers') {
            steps {
                echo 'Deploying Docker containers...'
                sh '''
                docker-compose up -d
                '''
            }
        }

        stage('Post-Deployment') {
            steps {
                echo 'Pipeline execution completed successfully!'
            }
        }
    }

    post {
        always {
            echo 'Cleaning up workspace...'
            cleanWs()
        }
    }
}

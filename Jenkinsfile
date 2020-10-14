// 声明式流水线
pipeline {
    agent any
    stages {
        stage('build') {
            steps {
                // sh命令是shell命令语言解释器,其引号间的文字会当成shell直接执行
                sh 'npm --version'
                sh 'echo "Hello World"'
                // 部署方式1: Jenkins运行成功,但访问不了
                sh 'npm run start'
                // 部署方式2: Jenkins运行成功,会自动打开浏览器页面
//                 sh 'npm run build'
//                 sh 'cd ./build && live-server'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying'
            }
        }
    }
    post {
        always {
            echo 'GuoLongFei: This will always run'
        }
        success {
            echo 'GuoLongFei: This will run only if successful'
        }
        failure {
            echo 'GuoLongFei: This will run only if failed'
        }
        unstable {
            echo 'GuoLongFei: This will run only if the run was marked as unstable'
        }
        changed {
            echo 'GuoLongFei: This will run only if the state of the Pipeline has changed. For example, if the Pipeline was previously failing but is now successful'
        }
    }
}

// 在Jenkins升级2.x版本之前,流水线只有一种脚本式流水线（Script Pipeline）
// 当升级2.x版本后,新增了声明式流水线（Declarative Pipeline）
// 无论是哪种流水线,都需要为流水线定义流水线脚本,称之为Jenkinsfile,使用Groovy语法写成

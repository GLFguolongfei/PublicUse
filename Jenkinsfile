// 声明式流水线
pipeline {
    agent any
    stages {
        stage('build') {
            steps {
                sh 'npm --version' // sh命令是shell命令语言解释器,其引号间的文字会当成shell直接执行
                sh 'echo "Hello World"'
//                 sh 'npm run start'
                sh 'live-server'
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
            echo 'GuoLongFei: This will run only if the state of the Pipeline has changed'
            echo 'GuoLongFei: For example, if the Pipeline was previously failing but is now successful'
        }
    }
}


// 在Jenkins升级2.x版本之前,流水线只有一种脚本式流水线（Script Pipeline）
// 当升级2.x版本后,新增了声明式流水线（Declarative Pipeline）
// 无论是哪种流水线,都需要为流水线定义流水线脚本,称之为Jenkinsfile,使用Groovy语法写成



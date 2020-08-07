// Jenkinsfile (Declarative Pipeline) 声明式流水线
pipeline { // pipeline是声明式流水线的一种特定语法,在块内定义了整个流水线的所有内容
    agent any // agent是声明式流水线的一种特定语法,它指示Jenkins为整个流水线分配一个执行器(在节点上)和工作区,等效于脚本式流水线node块
    stages { // 所有流程(状态)的外层块,仅有一个
        stage('build') { // 每个stage为一流程,与脚本式基本一致,每个stage可以定义名称
            steps { // 步骤块,内部包含具体操作
                sh 'npm run start' // sh操作,其引号间的文字会当成shell直接执行
            }
        }
        stage('Test'){
            steps {
                sh 'echo "Hello World"'
            }
        }
    }
}

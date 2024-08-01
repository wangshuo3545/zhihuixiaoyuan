  <template>
    <div class="login-container">
      <el-card class="login-card">
        <template #header>
          <div class="card-header">
            <h2>智慧校园系统登录</h2>
          </div>
        </template>
        <el-form :model="loginForm" :rules="rules" ref="loginFormRef" label-width="0px" class="login-form">
          <el-form-item prop="username">
            <el-input v-model="loginForm.username" placeholder="用户名">
              <template #prefix>
                <el-icon><User /></el-icon>
              </template>
            </el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input v-model="loginForm.password" type="password" placeholder="密码">
              <template #prefix>
                <el-icon><Lock /></el-icon>
              </template>
            </el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm" :loading="loading" class="login-button">登录</el-button>
          </el-form-item>
        </el-form>
      </el-card>
    </div>
  </template>

  <script setup>
  import { ref, reactive } from 'vue'
  import { ElMessage } from 'element-plus'
  import { User, Lock } from '@element-plus/icons-vue'

  const loginFormRef = ref(null)
  const loading = ref(false)

  const loginForm = reactive({
    username: '',
    password: ''
  })

  const rules = {
    username: [
      { required: true, message: '请输入用户名', trigger: 'blur' },
      { min: 3, max: 20, message: '长度在 3 到 20 个字符', trigger: 'blur' }
    ],
    password: [
      { required: true, message: '请输入密码', trigger: 'blur' },
      { min: 6, max: 20, message: '长度在 6 到 20 个字符', trigger: 'blur' }
    ]
  }

  const submitForm = () => {
    if (!loginFormRef.value) return

    loginFormRef.value.validate((valid) => {
      if (valid) {
        loading.value = true
        // 这里应该调用您的登录API
        // 例如: loginApi(loginForm)
        setTimeout(() => {
          loading.value = false
          ElMessage.success('登录成功')
          // 在实际应用中，这里应该处理登录成功后的逻辑，比如存储token和跳转到首页
        }, 2000)
      } else {
        ElMessage.error('请正确填写登录信息')
        return false
      }
    })
  }
  </script>

  <style scoped>
  .login-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f0f2f5;
  }

  .login-card {
    width: 350px;
  }

  .card-header {
    text-align: center;
  }

  .login-form {
    padding: 20px;
  }

  .login-button {
    width: 100%;
  }
  </style>
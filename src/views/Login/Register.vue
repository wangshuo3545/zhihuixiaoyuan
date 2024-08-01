  <template>
    <div class="register-container">
      <el-card class="register-card">
        <template #header>
          <div class="card-header">
            <h2>智慧校园系统注册</h2>
          </div>
        </template>
        <el-form :model="registerForm" :rules="rules" ref="registerFormRef" label-width="0px" class="register-form">
          <el-form-item prop="username">
            <el-input v-model="registerForm.username" placeholder="用户名">
              <template #prefix>
                <el-icon><User /></el-icon>
              </template>
            </el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input v-model="registerForm.password" type="password" placeholder="密码">
              <template #prefix>
                <el-icon><Lock /></el-icon>
              </template>
            </el-input>
          </el-form-item>
          <el-form-item prop="confirmPassword">
            <el-input v-model="registerForm.confirmPassword" type="password" placeholder="确认密码">
              <template #prefix>
                <el-icon><Lock /></el-icon>
              </template>
            </el-input>
          </el-form-item>
          <el-form-item prop="email">
            <el-input v-model="registerForm.email" placeholder="邮箱">
              <template #prefix>
                <el-icon><Message /></el-icon>
              </template>
            </el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm" :loading="loading" class="register-button">注册</el-button>
          </el-form-item>
        </el-form>
      </el-card>
    </div>
  </template>

  <script setup>
  import { ref, reactive } from 'vue'
  import { ElMessage } from 'element-plus'
  import { User, Lock, Message } from '@element-plus/icons-vue'

  const registerFormRef = ref(null)
  const loading = ref(false)

  const registerForm = reactive({
    username: '',
    password: '',
    confirmPassword: '',
    email: ''
  })

  const validatePass = (rule, value, callback) => {
    if (value === '') {
      callback(new Error('请输入密码'))
    } else {
      if (registerForm.confirmPassword !== '') {
        registerFormRef.value.validateField('confirmPassword')
      }
      callback()
    }
  }

  const validatePass2 = (rule, value, callback) => {
    if (value === '') {
      callback(new Error('请再次输入密码'))
    } else if (value !== registerForm.password) {
      callback(new Error('两次输入密码不一致!'))
    } else {
      callback()
    }
  }

  const rules = {
    username: [
      { required: true, message: '请输入用户名', trigger: 'blur' },
      { min: 3, max: 20, message: '长度在 3 到 20 个字符', trigger: 'blur' }
    ],
    password: [
      { required: true, validator: validatePass, trigger: 'blur' },
      { min: 6, max: 20, message: '长度在 6 到 20 个字符', trigger: 'blur' }
    ],
    confirmPassword: [
      { required: true, validator: validatePass2, trigger: 'blur' }
    ],
    email: [
      { required: true, message: '请输入邮箱地址', trigger: 'blur' },
      { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
    ]
  }

  const submitForm = () => {
    if (!registerFormRef.value) return

    registerFormRef.value.validate((valid) => {
      if (valid) {
        loading.value = true
        // 这里应该调用您的注册API
        // 例如: registerApi(registerForm)
        setTimeout(() => {
          loading.value = false
          ElMessage.success('注册成功')
          // 在实际应用中，这里应该处理注册成功后的逻辑，比如跳转到登录页面
        }, 2000)
      } else {
        ElMessage.error('请正确填写注册信息')
        return false
      }
    })
  }
  </script>

  <style scoped>
  .register-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f0f2f5;
  }

  .register-card {
    width: 350px;
  }

  .card-header {
    text-align: center;
  }

  .register-form {
    padding: 20px;
  }

  .register-button {
    width: 100%;
  }
  </style>
export const useMessages = () => {
  return useState<any>('messages', () => {
    return {
      errors: {
        required: 'Поле обязательно для заполнения',
        passwordMinLength: 'Пароль должен содержать не менее 8 символов',
        repeatPassword: 'Пароли должны совпадать',
        email: 'Некорректный формат электронной почты'
      }
    }
  })
}

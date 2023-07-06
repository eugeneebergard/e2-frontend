export const useIsAuth = () => {
  return useState<boolean>('is-auth', () => false)
}

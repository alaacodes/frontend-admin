import { redirect } from "next/navigation"

export const logout =  () => {
  localStorage.removeItem('AD_userToken')
  localStorage.removeItem('AD_userData')
  location.reload()
}

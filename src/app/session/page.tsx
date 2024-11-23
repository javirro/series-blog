import { auth, signIn, signOut } from '@/auth'
import styles from '../app.module.css'
import sessionStyles from './session.module.css'

const SessionPage = async () => {
  const session = await auth()
  console.log({ session })
  return (
    <div className={styles.page}>
      <form
        className={sessionStyles.form}
        action={async (formData) => {
          'use server'
          const res = await signIn('credentials', formData)
          console.log({ res })
        }}
      >
        <label className={sessionStyles.label}>
          Email
          <input name="email" type="email" className={sessionStyles.input} />
        </label>
        <label className={sessionStyles.label}>
          Password
          <input name="password" type="password" className={sessionStyles.input} />
        </label>
        <button className={sessionStyles.btn}>Sign In</button>
      </form>
      <form
        className={sessionStyles.form}
        action={async () => {
          'use server'
          await signOut()
        }}
      >
        <button type="submit" className={sessionStyles.btn}>
          Sign Out
        </button>
      </form>
    </div>
  )
}

export default SessionPage

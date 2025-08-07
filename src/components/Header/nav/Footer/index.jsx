import styles from './style.module.scss';
import Magnetic from '../../../../common/Magnetic'

export default function Index() {
  return (
    <div className={styles.footer}>
        <Magnetic><a className={styles.footerLink} href='https://www.instagram.com/officialbrandlift/' target='_blank'>Instagram</a></Magnetic>
        <Magnetic><a className={styles.footerLink} href='https://www.facebook.com/people/Brandlift-Media/61575937634214/' target='_blank'>Facebook</a></Magnetic>
        <Magnetic><a className={styles.footerLink} href='https://www.linkedin.com/company/official-brandlift-media/' target='_blank'>LinkedIn</a></Magnetic>
        <Magnetic><a className={styles.footerLink} href='https://in.pinterest.com/officialbrandlift/' target='_blank'>Pinterest</a></Magnetic>
    </div>
  )
}

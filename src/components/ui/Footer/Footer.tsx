import styles from './footer.module.css'

const { footer } = styles

type FooterProps = {
  children: JSX.Element | JSX.Element[]
}

function Footer({ children }: FooterProps) {
  return <footer className={footer}>{children}</footer>
}

export default Footer

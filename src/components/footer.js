import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Footer = ({ siteTitle }) => (
  <footer
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <footer>
        <marquee>
        © {new Date().getFullYear()}, Created By
          {` `}
          <a href="https://www.ivisionstudio.in" className="text-colour">iVision Web Studio</a>
            </marquee> 
        </footer>
  </footer>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer;

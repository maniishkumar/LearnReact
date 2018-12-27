import React from "react";
function Footer(props) {
  var date = new Date();
  return (
    <div className="footer">
      &copy; {date.getFullYear()} ABC All rights reserved.
    </div>
  );
}

export default Footer;

import React from "react";
import Button from "components/Button";
import { useSelector } from "react-redux";
import { selectLinks } from "store/slice/linkSlice";
import { AnimatePresence, motion } from "framer-motion";

function Links() {
  const [copiedLink, setCopiedLink] = React.useState(null);

  const copyToClipboard = (link) => {
    navigator.clipboard.writeText(link).then(() => {
      setCopiedLink(link);
    });
  };

  const links = useSelector(selectLinks);
  if (!links.length) return null;
  return (
    <div className="links">
      <div className="links-desc">
        <span>Orginal link</span>
        <span>shorten link</span>
      </div>
      <div className="links-scroll">
        {links.map((item) => (
          <AnimatePresence key={item.code}>
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              data-active={copiedLink === item.full_short_link2}
              className="links-item"
            >
              <span>
                <a href={item.original_link} target="_blank" rel="noreferrer">
                  {item.original_link}
                </a>
              </span>
              <div className="links-item-link">
                <span>
                  <a
                    href={item.full_short_link2}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {item.full_short_link2}
                  </a>
                </span>
                <Button
                  className="button"
                  onClick={() => copyToClipboard(item.full_short_link2)}
                >
                  {copiedLink === item.full_short_link2 ? "Copied!" : "Copy"}
                </Button>
              </div>
            </motion.div>
          </AnimatePresence>
        ))}
      </div>
    </div>
  );
}

export default Links;

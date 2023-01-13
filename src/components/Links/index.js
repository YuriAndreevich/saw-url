import React from 'react'
import './Links.scss'
import Button from 'components/Button';
import { useSelector } from 'react-redux';
import { selectLinks } from 'store/slice/linkSlice';
import { AnimatePresence, motion } from 'framer-motion';


function Links() {

    const [copiedLink, setCopiedLink] = React.useState(null)
    console.log(copiedLink)

    const copyToClipboard = (link) => {
        console.log(copiedLink)
        navigator.clipboard.writeText(link).then(() => {
            setCopiedLink(link)

        })
    }

    const links = useSelector(selectLinks)
    if (!links.length) return null;
    return (
        <div className='links'>
            {links.map(item => (
                <AnimatePresence key={item.code}>
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        data-active={copiedLink === item.full_short_link2}
                    >
                        <span><a href={item.original_link} target="_blank" rel="noreferrer">{item.original_link}</a></span>
                        <span><a href={item.full_short_link2} target="_blank" rel="noreferrer">{item.full_short_link2}</a></span>
                        <Button className='button' onClick={() => copyToClipboard(item.full_short_link2)}>
                            {copiedLink === item.full_short_link2 ? 'Copied!' : 'Copy'}
                        </Button>
                    </motion.div>
                </AnimatePresence>
            ))}
        </div>
    )
}

export default Links
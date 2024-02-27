import React from "react";
import { motion } from "framer-motion";

function Button(props) {
    return (
        // <button className="button resumeBtn"> {props.text }</button>
        <motion.button
            className="resumeBtn button"
            whileHover={{ scale: 1.05, backgroundColor: "#F05454", color: "black" }}
            whileTap={{ scale: 0.95 }}
        >
        {props.text }
        </motion.button>
    )
}

export default Button;
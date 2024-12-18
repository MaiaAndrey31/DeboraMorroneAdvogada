

import PropTypes from "prop-types"

import FlipText from "@/components/magicui/flip-text";
 
export function FlipTextDemo({text}) {
  return (
    <FlipText
    id='flip'
      className="text-4xl font-bold -tracking-widest text-black dark:text-white md:text-7xl md:leading-[5rem]"
      word={{text}}
    />
  );
}

FlipTextDemo.propTypes={
    text: PropTypes.string
}
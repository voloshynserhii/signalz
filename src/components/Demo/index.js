import "./demo.scss"

const Demo = () => {
  return (
      <div className="frameWrapper">
        <div className="mask"/>
        <iframe
          id="iframe"
          scrolling="no" frameborder="0"
          width="100%"
          height="100%"
          src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FsbaGiPB7WI3IvdfvAclUsD%2FCrypto-App_Final%3Fscaling%3Dscale-down%26page-id%3D0%253A1%26node-id%3D11%253A1741"
        ></iframe>
      </div>
  );
};

export default Demo;
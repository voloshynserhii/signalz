import HomeButton from "./HomeButton";

const Demo = () => {
  return (
    <>
      <HomeButton path="/"/>
      <div style={{ height: "100vh" }}>
        <iframe
          style={{ border: "0px solid rgba(0, 0, 0, 0); height:auto;" }}
          width="100%"
          height="100%"
          src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FsbaGiPB7WI3IvdfvAclUsD%2FCrypto-App_Final%3Fscaling%3Dscale-down%26page-id%3D0%253A1%26node-id%3D11%253A1741"
        ></iframe>
      </div>
    </>
  );
};

export default Demo;
import React from "react";
import axios from "axios";
import { Loading } from "../../components/Loading";
import { useRouter } from "next/router";
import useCreateAuthToken from "../../hooks/AuthTokenHook";

const Verify = () => {
  const [isValid, setIsValid] = React.useState(false);
  const [message, setMessage] = React.useState(
    "Please wait we are validating this link ..."
  );

  const router = useRouter();

  React.useEffect(() => {
    axios
      .post("http://localhost:8888/verification", {
        email: router.query.email,
        code: router.query.code,
      })
      .then(async (res) => {
        if (res) setMessage("Please wait while verifying your account ...");
        await axios
          .put("http://localhost:8888/update-verification-code", {
            email: router.query.email,
            code: router.query.code,
          })
          .then((res) => {
            router.push('/login')
          });
      })
      .catch((err) => {
        setMessage(err.response.data.error_en + " or has expired");
      });
  });

  return (
    <>
      <Loading showLogo={true} hasError={isValid} message={message} />
    </>
  );
};

export default Verify;

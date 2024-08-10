// import { useRouteError } from "react-router-dom";
// import { RejectedDataType } from "../../types/errorTypes";
import { ROUTES } from "../../constants/routes";
import { Notification, rem } from "@mantine/core";
import { Link } from "react-router-dom";
import { IconX } from "@tabler/icons-react";
import "./fallback.scss";

export const Fallback = () => {
  const xIcon = <IconX style={{ width: rem(20), height: rem(20) }} />;
  // const error = useRouteError();
  // const knownError = error as RejectedDataType;

  return (
    <>
      <Notification className="error" icon={xIcon} color="red" title="Error!">
        {/* {knownError?.messageError} {knownError?.status} */}
        <p>Something went wrong</p>
        <Link to={ROUTES.DEFAULT}>Back to home page</Link>
      </Notification>
    </>
  );
};

// import { useRouteError } from "react-router-dom";
// import { RejectedDataType } from "../../types/errorTypes";
import { ROUTES } from "../../constants/routes";
import { Anchor, Notification, rem } from "@mantine/core";
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
        <Anchor href={ROUTES.DEFAULT}>Back to home page</Anchor>
      </Notification>
    </>
  );
};

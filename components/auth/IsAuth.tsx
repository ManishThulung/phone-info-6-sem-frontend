"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

function IsAuth<T>(Component: React.ComponentType<T>) {
  const WrappedComponent = (props: T) => {
    const router = useRouter();

    // if (loading) {
    //   return <div>Loading...</div>;
    // }

    // if (error || !data) {
    //   router.push("/login");
    //   return null;
    // }

    // const role = localStorage.getItem("access_token");
    let user;
    if (typeof window !== "undefined") {
      user = JSON.parse(localStorage.getItem("access_token") || "");
    }
    const userIsAuthenticated = user !== null;

    useEffect(() => {
      if (!userIsAuthenticated) {
        router.push("/auth");
      }
    }, [userIsAuthenticated, router]);

    return (
      <>
        <Component {...props!} />
      </>
    );
  };

  // Set the display name of the wrapped component
  // WrappedComponent.displayName = `IsAuth(${
  //   Component.displayName || Component.name || "Component"
  // })`;

  return WrappedComponent;
}

export default IsAuth;

"use client";

import { useRouter } from "next/navigation";
// import { useRouter } from "next/router";
import { useEffect } from "react";

export default function IsAuth(Component: React.ComponentType) {
  return function ProtectedRoute({ ...props }) {
    const router = useRouter();
    const user = JSON.parse(localStorage?.getItem("access_token") || "");
    const userIsAuthenticated = user !== null;

    // useEffect(() => {
    //   if (!userIsAuthenticated) {
    //     router.push("/auth");
    //   }
    // }, [userIsAuthenticated, router]);

    return <Component {...props} />;
  };
}

// import React, { useEffect } from "react";
// import { useRouter } from "next/navigation";

// function IsAuth<T>(Component: React.ComponentType<T>) {
//   const WrappedComponent = (props: T) => {
//     const router = useRouter();

//     // if (loading) {
//     //   return <div>Loading...</div>;
//     // }

//     // if (error || !data) {
//     //   router.push("/login");
//     //   return null;
//     // }

//     // const role = localStorage.getItem("access_token");
//     let role;
//     useEffect(() => {
//       role = true;
//     });

//     if (!role) {
//       router.push("/");
//       return null;
//     }

//     return (
//       <>
//         <Component {...props!} />
//       </>
//     );
//   };

//   // Set the display name of the wrapped component
//   // WrappedComponent.displayName = `IsAuth(${
//   //   Component.displayName || Component.name || "Component"
//   // })`;

//   return WrappedComponent;
// }

// export default IsAuth;

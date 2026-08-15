import { useEffect, useRef } from "react";
import { useGoogleLoginMutation } from "../RTK/GoogleAuthApi";

function GoogleButton() {

    const buttonRef = useRef(null);

    const [
        googleLogin,
        {
            isLoading,
            isError,
            error,
        }
    ] = useGoogleLoginMutation();


    async function handleGoogleResponse(response) {

        try {

            const result = await googleLogin(
                response.credential
            ).unwrap();

            console.log(
                "Google login success:",
                result
            );

            const {
                token,
                user,
                role,
            } = result.data;

            localStorage.setItem(
                "token",
                token
            );

            localStorage.setItem(
                "currentUser",
                user
            );

            localStorage.setItem(
                "role",
                role
            );

            window.location.href = "/";

        } catch (err) {

            console.error(
                "Google login failed:",
                err
            );
        }
    }


    useEffect(() => {

        if (!window.google) {
            console.log(
                "Google script not loaded"
            );
            return;
        }


        window.google.accounts.id.initialize({

            client_id:
                import.meta.env.VITE_GOOGLE_CLIENT_ID,

            callback:
                handleGoogleResponse,

        });


        window.google.accounts.id.renderButton(

            buttonRef.current,

            {
                theme: "outline",
                size: "large",
                text: "signin_with",
                shape: "rectangular",
                width: 400,
            }

        );

    }, []);


    return (
        <div>

            <div ref={buttonRef}></div>

            {isLoading && (
                <p className="text-sm text-gray-500 mt-2">
                    Signing in...
                </p>
            )}

            {isError && (
                <p className="text-sm text-red-500 mt-2">
                    {error?.data?.message ||
                        "Google login failed"}
                </p>
            )}

        </div>
    );
}

export default GoogleButton;
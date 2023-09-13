import { useRouter } from "next/router";
import Swal from "sweetalert2";

export const CustomAlert = () => {
  const router = useRouter();

  // Success alert
  const SuccessAlert = (message, path = "") => {
    Swal.fire({
      icon: "success",
      title: message,
      showConfirmButton: false,
      timer: 1500,
      customClass: {},
      iconColor: "#fd7e14",
      confirmButtonColor: "#fd7e14",
    }).then(() => {
      if (path) {
        router.push(`/nexos/${path}`);
      }
    });
  };

  // Error alert
  const ErrorAlert = (message, path = "") => {
    Swal.fire({
      icon: "error",
      title: message,
      confirmButtonText: "OK",
      iconColor: "#fd7e14",
      confirmButtonColor: "#fd7e14",
    });
    if (path) {
      router.push(`/nexos/${path}`);
    }
  };

  const InfoAlert = (message, path = "") => {
    Swal.fire({
      icon: "info",
      title: message,
      confirmButtonText: "OK",
      iconColor: "#fd7e14",
      confirmButtonColor: "#fd7e14",
    });
    if (path) {
      router.push(`/nexos/${path}`);
    }
  };

  const EditConfirmation = async (message) => {
    const result = await Swal.fire({
      icon: "question",
      title: message,
      showCancelButton: true,
      confirmButtonText: "Si",
      cancelButtonText: "No",
      iconColor: "#fd7e14",
      confirmButtonColor: "#fd7e14",
    });

    return result;
  };

  const AcceptConfirmation = async (message) => {
    const result = await Swal.fire({
      icon: "info",
      title: message,
      showCancelButton: false,
      confirmButtonText: "Ok",
      iconColor: "#fd7e14",
      confirmButtonColor: "#fd7e14",
    });

    return result;
  };

  return {
    // Métodos
    SuccessAlert,
    ErrorAlert,
    EditConfirmation,
    AcceptConfirmation,
    InfoAlert,
  };
};

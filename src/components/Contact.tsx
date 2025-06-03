import RevealOnScroll from "./RevealOnScroll";
import emailjs from "@emailjs/browser";
import { Toaster, toast } from "sonner";

import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

("use client");

export default function Contact() {
  const SERVICE_ID = "service_4pxpp5b";
  const TEMPLATE_ID = "template_tf79odq";
  const PUBLIC_KEY = "vxMYMfRyECZxCCW4j";

  const handleOnSubmit = (values: any) => {
    console.log(values);
    emailjs.send(SERVICE_ID, TEMPLATE_ID, values, PUBLIC_KEY).then(
      () => {
        // alert("Mensaje enviado correctamente.");
        toast.success("Mensaje enviado correctamente.");
      },
      (error: any) => {
        console.log(error.text);
        alert("Hubo un error.");
        toast.error("Hubo algún problema. Intenta nuevamente");
      }
    );
  };

  const mailSchema = Yup.object().shape({
    from_name: Yup.string()
      .min(2, "Nombre muy corto")
      .max(20, "Nombre muy largo")
      .required("Requerido"),
    reply_to: Yup.string().email("Mail invalido").required("Requerido"),
    message: Yup.string()
      .required("Requerido")
      .min(10, "Minimo 10 caracteres.")
      .max(300, "Maximo 300 caracteres."),
  });

  return (
    <div className=" flex items-center justify-center">
      <div className="grid w-2/4">
        <div className="py-15">
          <Toaster position="bottom-center" richColors />
          <h1 className="text-4xl dark:text-white text-center">Contacto</h1>
          <p className="text-neutral-400 text-center">
            Acá podes dejar tu <span className="text-[#ff0]">mensaje</span>.
          </p>
        </div>
        <RevealOnScroll>
          <Formik
            initialValues={{ from_name: "", reply_to: "", message: "" }}
            validationSchema={mailSchema}
            onSubmit={(values, { resetForm }) => {
              handleOnSubmit(values);
              resetForm();
            }}
          >
            {({ errors, touched }) => (
              <Form>
                <div className="gap-4 grid">
                  <label
                    htmlFor="from_name"
                    className="block text-sm font-medium mb-2 dark:text-white"
                  >
                    Nombre
                    {errors.from_name && touched.from_name ? (
                      <> ({errors.from_name})</>
                    ) : null}
                  </label>
                  <Field
                    type="text"
                    id="from_name"
                    name="from_name"
                    className="py-2.5 sm:py-3 px-4 block border border-gray-200 rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                    placeholder="Nombre"
                  />

                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2 dark:text-white"
                  >
                    Email
                    {errors.reply_to && touched.reply_to ? (
                      <> ({errors.reply_to})</>
                    ) : null}
                  </label>
                  <Field
                    type="text"
                    id="reply_to"
                    name="reply_to"
                    className="py-2.5 sm:py-3 px-4 block border border-gray-200 rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                    placeholder="Email@email.com"
                  />

                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2 dark:text-white"
                  >
                    Mensaje
                    {errors.message && touched.message ? (
                      <> ({errors.message})</>
                    ) : null}
                  </label>
                  <Field
                    type="text"
                    id="message"
                    name="message"
                    className="py-2.5 sm:py-3 px-4 block border border-neutral-700 text-neutral-400 rounded-lg sm:text-sm"
                    placeholder="Mensaje"
                  />

                  <button
                    type="submit"
                    className="text-center py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-neutral-700 text-neutral-400 hover:border-[#ff0] hover:text-[#ff0] transition"
                  >
                    Enviar mensaje
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </RevealOnScroll>
      </div>
    </div>
  );
}

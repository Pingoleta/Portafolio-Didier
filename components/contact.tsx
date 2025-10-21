import { Button } from "@heroui/button";
import { Input, Textarea } from "@heroui/input";

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 md:px-20">
      <h2 className="text-3xl font-bold mb-8 text-center text-neonGreen">
        Ponte en Contacto
      </h2>
      <form
        action="https://formsubmit.co/iamfarid1996@gmail.com"
        method="POST"
        className="max-w-lg mx-auto flex flex-col gap-4"
      >
        {/* Campos */}
        <Input label="Nombre" name="name" isRequired />
        <Input label="Correo" type="email" name="email" isRequired />
        <Textarea label="Mensaje" name="message" isRequired />

        {/* Campos ocultos opcionales */}
        <input type="hidden" name="_subject" value="Nuevo mensaje desde tu web" />
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_template" value="box" />
        <input type="hidden" name="_next" value="https://tusitio.com/gracias" />

        {/* Botón */}
        <Button type="submit" color="primary">
          Enviar Mensaje
        </Button>
      </form>
    </section>
  );
}

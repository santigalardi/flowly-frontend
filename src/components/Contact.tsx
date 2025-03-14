import { useState } from 'react';
import { toast } from 'sonner';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validaciones
    const newErrors = { name: '', email: '', message: '' };
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.message) newErrors.message = 'Message is required';

    setErrors(newErrors);

    // Si no hay errores, simular el envío
    if (!newErrors.name && !newErrors.email && !newErrors.message) {
      toast.success('Your email has been delivered successfully.');
      setFormData({ name: '', email: '', message: '' }); // Limpiar el formulario
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '' }); // Limpiar el error al escribir
  };

  return (
    <section className="pt-12 pb-18 bg-gradient-to-b from-white to-[#D2DCFF]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl text-[#010D3E] text-center font-bold tracking-tight">Contact Us</h2>
        <p className="text-2xl text-center mt-10">Have questions or need assistance? We're here to help!</p>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col p-8 gap-6 my-7 bg-white border border-[#F1F1F1] rounded-3xl shadow-lg max-w-[600px] mx-auto"
        >
          <div>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border border-[#1040dc]/20 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#233778] focus:border-transparent placeholder:text-[#7B7B7B]"
              required
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-[#1040dc]/20 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#233778] focus:border-transparent placeholder:text-[#7B7B7B]"
              required
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>
          <div>
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 border border-[#1040dc]/20 rounded-lg resize-none h-[150px] focus:outline-none focus:ring-1 focus:ring-[#233778] focus:border-transparent placeholder:text-[#7B7B7B]"
              required
            />
            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
          </div>
          <button
            type="submit"
            className="bg-black mt-[10px] text-white px-4 py-2 rounded-lg font-medium inline-flex align items justify-center tracking-tight w-full cursor-pointer hover:bg-[#8460ab] active:scale-98 transition-colors duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

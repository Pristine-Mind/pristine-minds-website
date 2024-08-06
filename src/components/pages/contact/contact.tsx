import { MailIcon, MapPinIcon, PhoneIcon } from 'lucide-react';
import { Button } from '@/components/ui/button.tsx';
import { Input } from '@/components/ui/input.tsx';

import { z } from 'zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form.tsx';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from '@/components/ui/use-toast.ts';
import { Textarea } from '@/components/ui/textarea.tsx';

const FormSchema = z.object({
  fullname: z.string().min(2, {
    message: 'Fullname must be at least 2 characters.',
  }),
  email: z.string().email({
    message: 'Invalid email address.',
  }),
  message: z.string().min(10, {
    message: 'Message must be at least 10 characters.',
  }),
});

const Contact = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      fullname: '',
      email: '',
      message: '',
    },
  });

  function onSubmit(_data: z.infer<typeof FormSchema>) {
    toast({
      title: 'Your message has been sent',
      description: 'Our team will contact you shortly.',
    });
  }

  return (
    <div className="grid grid-cols-2">
      <div className="text-start">
        <div className="mb-12">
          <div className="uppercase mb-2 text-sm tracking-wide font-medium text-brand-blue opacity-80">
            Get In Touch
          </div>
          <div className="text-5xl font-bold text-left">Contact Us</div>
        </div>
        <div>
          <div className="flex gap-6 mb-8">
            <div className="w-14 h-14 rounded-full bg-brand-accent-light flex items-center justify-center">
              <MapPinIcon className="text-brand-accent h-6 w-6"></MapPinIcon>
            </div>
            <div className="flex flex-col gap-2">
              <p className="uppercase opacity-50 text-[15px] font-medium tracking-[0.2em]">Email</p>
              <p className="tracking-wide">info@pristine-minds.com</p>
            </div>
          </div>
          <div className="flex gap-6 mb-8">
            <div className="w-14 h-14 rounded-full bg-brand-accent-light flex items-center justify-center">
              <PhoneIcon className="text-brand-accent h-6 w-6"></PhoneIcon>
            </div>
            <div className="flex flex-col gap-2">
              <p className="uppercase opacity-50 text-[15px] font-medium tracking-[0.2em]">Contact</p>
              <p className="tracking-wide">+977-9767474645</p>
            </div>
          </div>
          <div className="flex gap-6 mb-8">
            <div className="w-14 h-14 rounded-full bg-brand-accent-light flex items-center justify-center">
              <MailIcon className="text-brand-accent h-6 w-6"></MailIcon>
            </div>
            <div className="flex flex-col gap-2">
              <p className="uppercase opacity-50 text-[15px] font-medium tracking-[0.2em]">Address</p>
              <p className="tracking-wide">Gairidhara-02, Kathmandu, Nepal</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start justify-start">
        <blockquote className="mb-12 border-s-2 pl-[1.75rem] border-primary text-xl text-start">
          Explore Pristine Minds Nepal's IT solutions for your business goals. Contact us to learn more.
        </blockquote>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 text-start">
            <div className="grid grid-cols-2 gap-8 w-full">
              <FormField
                control={form.control}
                name="fullname"
                render={({ field }) => (
                  <FormItem className="w-[264px]">
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input placeholder="" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email Address</FormLabel>
                    <FormControl>
                      <Input placeholder="" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Your message</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Type your message here." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Send Message</Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default Contact;

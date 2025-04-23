import { MailIcon, MapPinIcon, PhoneIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { z } from 'zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from '@/components/ui/use-toast';
import { Textarea } from '@/components/ui/textarea';
import emailjs from 'emailjs-com';

const FormSchema = z.object({
  fullname: z.string().min(2, { message: 'Full name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Invalid email address.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

type FormValues = z.infer<typeof FormSchema>;

export default function Contact() {
  const form = useForm<FormValues>({
    resolver: zodResolver(FormSchema),
    defaultValues: { fullname: '', email: '', message: '' },
  });

  function onSubmit(data: FormValues) {
    try {
      emailjs.send(
        'service_z3sx26l',
        'template_w5bysh8',
        { fullname: data.fullname, email: data.email, message: data.message },
        '42gma15X3fCcZ1vY-'
      );
      toast({ title: 'Your message has been sent', description: 'Our team will contact you shortly.' });
      form.reset();
    } catch {
      toast({
        title: 'Error sending message',
        description: 'Please try again later.',
        variant: 'destructive',
      });
    }
  }

  const infoBlocks = [
    { icon: MailIcon, label: 'Email', value: 'info@pristinemindsnepal.com' },
    { icon: PhoneIcon, label: 'Contact', value: '+977‑9767474645' },
    { icon: MapPinIcon, label: 'Address', value: 'Gairidhara‑02, Kathmandu, Nepal' },
  ];

  return (
    <section className="grid gap-10 lg:grid-cols-2 lg:gap-16">
      <div className="space-y-8 text-left">
        <div>
          <span className="text-xs font-medium uppercase tracking-wide text-brand-blue/80 sm:text-sm">
            Get in touch
          </span>
          <h2 className="mt-2 text-2xl font-extrabold sm:text-3xl lg:text-4xl">Contact Us</h2>
        </div>

        <div className="space-y-8">
          {infoBlocks.map(({ icon: Icon, label, value }) => (
            <div key={label} className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-accent-light">
                <Icon className="h-6 w-6 text-brand-accent" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-white/60">{label}</p>
                <p className="mt-1 text-sm sm:text-base">{value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <blockquote className="mb-8 border-l-4 border-primary pl-5 text-sm leading-6 text-gray-700 sm:text-base sm:leading-7">
          Explore Pristine Minds Nepal's IT solutions for your business goals. Contact us to learn more.
        </blockquote>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid gap-6 sm:grid-cols-2">
              <FormField
                control={form.control}
                name="fullname"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Full Name" {...field} />
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
                      <Input placeholder="Email Address" {...field} />
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
                    <Textarea placeholder="Type your message here…" rows={4} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" size="lg">
              Send Message
            </Button>
          </form>
        </Form>
      </div>
    </section>
  );
}

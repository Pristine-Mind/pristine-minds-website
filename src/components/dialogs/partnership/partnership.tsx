import { DialogHeader, DialogTitle } from '@/components/ui/dialog.tsx';
import { Button } from '@/components/ui/button.tsx';
import { z } from 'zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form.tsx';
import { Input } from '@/components/ui/input.tsx';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select.tsx';
import { Textarea } from '@/components/ui/textarea.tsx';
import { toast } from '@/components/ui/use-toast.ts';
import { ScrollArea } from '@/components/ui/scroll-area.tsx';
import emailjs from 'emailjs-com';
import React from 'react';

const FormSchema = z.object({
  companyName: z
    .string({
      required_error: '',
    })
    .min(2, {
      message: 'Fullname must be at least 2 characters.',
    }),
  email: z
    .string({
      required_error: '',
    })
    .email({
      message: 'Invalid email address.',
    }),
  phone: z
    .string({
      required_error: '',
    })
    .min(10, {
      message: 'Phone must be at least 10 characters.',
    })
    .max(10, {
      message: 'Phone cannot be greater than 10 characters.',
    }),
  website: z
    .string({
      required_error: '',
    })
    .url({
      message: 'Invalid website address.',
    }),
  partnershipType: z.string({
    required_error: '',
  }),
  previousCollaborations: z.optional(
    z.string().min(10, {
      message: 'Project description must be at least 10 characters.',
    })
  ),
  queries: z
    .string({
      required_error: '',
    })
    .min(10, {
      message: 'Queries must be at least 10 characters',
    }),
});

const PartnershipDialog = () => {
  const partnershipForm = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    try {
      emailjs.send(
        'service_z3sx26l',
        'template_sl5n9rj',
        {
          fullname: data.companyName,
          email: data.email,
          phone: data.phone,
          website: data.website,
          // serviceType: data.serviceType,
          // projectDescription: data.projectDescription,
          // references: data.references,
          queries: data.queries,
        },
        '42gma15X3fCcZ1vY-'
      );

      toast({
        title: 'Your message has been sent',
        description: 'Our team will contact you shortly.',
      });

      partnershipForm.reset();
    } catch (error) {
      toast({
        title: 'You submitted the following values:',
        description: (
          <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
            <code className="text-white">{JSON.stringify(data, null, 2)}</code>
          </pre>
        ),
      });
    }
  }

  return (
    <React.Fragment>
      <DialogHeader>
        <DialogTitle>Become our partner</DialogTitle>
      </DialogHeader>
      <div className="w-full mt-2">
        <ScrollArea className="h-[75vh] w-auto">
          <Form {...partnershipForm}>
            <form onSubmit={partnershipForm.handleSubmit(onSubmit)} className="space-y-4 text-start">
              <p className="text-[22px] font-semibold mt-2 text-brand-blue">Basic Information</p>
              <div className="grid grid-cols-2 gap-8 w-full pl-2 pr-4">
                <FormField
                  control={partnershipForm.control}
                  name="companyName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        Company Name <span className="text-red-500">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="Company Name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={partnershipForm.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        Email Address <span className="text-red-500">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="Email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={partnershipForm.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        Phone no. <span className="text-red-500">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input type="number" placeholder="Phone Number" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={partnershipForm.control}
                  name="website"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        Website <span className="text-red-500">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input type="text" placeholder="Website" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <p className="text-[22px] font-semibold text-brand-blue">Type of Partnership</p>
              <div className="flex flex-col gap-8 w-full pl-2 pr-4">
                <FormField
                  control={partnershipForm.control}
                  name="partnershipType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        Type of Partnership <span className="text-red-500">*</span>
                      </FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a type of partnership" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="Digital Advertisement">Educational Institute</SelectItem>
                          <SelectItem value="Software Development">Development Company</SelectItem>
                          <SelectItem value="Consulting">Consulting Organization</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <p className="text-[22px] font-semibold text-brand-blue">Additional Information</p>
              <div className="flex flex-col gap-8 w-full pl-2 pr-4">
                <FormField
                  control={partnershipForm.control}
                  name="previousCollaborations"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Previous Collaborations</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Enter previous collaboration details" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={partnershipForm.control}
                  name="queries"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        Specific Requirements or Questions <span className="text-red-500">*</span>
                      </FormLabel>
                      <FormControl>
                        <Textarea placeholder="Enter specific requirements or questions" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="pl-2 pr-4">
                <Button type="submit" size="default" className="w-full">
                  Send Message
                </Button>
              </div>
            </form>
          </Form>
        </ScrollArea>
      </div>
    </React.Fragment>
  );
};

export default PartnershipDialog;

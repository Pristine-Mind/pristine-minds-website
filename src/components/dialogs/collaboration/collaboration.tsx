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
  serviceType: z.string({
    required_error: '',
  }),
  projectDescription: z
    .string({
      required_error: '',
    })
    .min(10, {
      message: 'Project description must be at least 10 characters.',
    }),
  references: z.optional(
    z
      .string({
        required_error: '',
      })
      .min(10, {
        message: 'References must be at least 10 characters',
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

const CollaborationDialog = () => {
  const collaborationForm = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: 'You submitted the following values:',
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <React.Fragment>
      <DialogHeader>
        <DialogTitle>Let's Work Together</DialogTitle>
      </DialogHeader>
      <div className="w-full mt-2">
        <ScrollArea className="h-[75vh] w-auto">
          <Form {...collaborationForm}>
            <form onSubmit={collaborationForm.handleSubmit(onSubmit)} className="space-y-4 text-start">
              <p className="text-[22px] font-semibold mt-2 text-brand-blue">Basic Information</p>
              <div className="grid grid-cols-2 gap-8 w-full pl-2 pr-4">
                <FormField
                  control={collaborationForm.control}
                  name="companyName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Company Name *</FormLabel>
                      <FormControl>
                        <Input placeholder="Company Name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={collaborationForm.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Address *</FormLabel>
                      <FormControl>
                        <Input placeholder="Email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={collaborationForm.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone no. *</FormLabel>
                      <FormControl>
                        <Input type="number" placeholder="Phone Number" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={collaborationForm.control}
                  name="website"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Website *</FormLabel>
                      <FormControl>
                        <Input type="text" placeholder="Website" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <p className="text-[22px] font-semibold text-brand-blue">Project Details</p>
              <div className="flex flex-col gap-8 w-full pl-2 pr-4">
                <FormField
                  control={collaborationForm.control}
                  name="serviceType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Type of Service Needed *</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a type of service" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="Digital Advertisement">Digital Advertisement</SelectItem>
                          <SelectItem value="Software Development">Software Development</SelectItem>
                          <SelectItem value="Consulting">Consulting</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={collaborationForm.control}
                  name="projectDescription"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Project Description *</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Enter the project description" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <p className="text-[22px] font-semibold text-brand-blue">Additional Information</p>
              <div className="flex flex-col gap-8 w-full pl-2 pr-4">
                <FormField
                  control={collaborationForm.control}
                  name="references"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Competitors or Benchmark References</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Enter the references here" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={collaborationForm.control}
                  name="queries"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Specific Requirements or Questions *</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Enter the requirements or queries here" {...field} />
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

export default CollaborationDialog;

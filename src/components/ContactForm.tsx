"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { Send, Loader2 } from "lucide-react";

const contactSchema = z.object({
  from: z.string().email("Please enter a valid email address"),
  subject: z.string().min(1, "Subject is required").max(100, "Subject must be less than 100 characters"),
  message: z.string().min(10, "Message must be at least 10 characters").max(1000, "Message must be less than 1000 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      from: "",
      subject: "Quick question",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    try {
      // For now, we'll use a mailto fallback
      // In production, you'd want to use a service like EmailJS, Formspree, or your own backend
      const mailtoLink = `mailto:ask.christophe@regnau.lt?subject=${encodeURIComponent(data.subject)}&body=${encodeURIComponent(`From: ${data.from}\n\nMessage:\n${data.message}`)}`;
      
      // Open email client
      window.location.href = mailtoLink;
      
      // Show success message
      toast.success("Email client opened! Please send the email from there.");
      
      // Reset form
      reset();
      
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit(onSubmit)} className="bg-card border border-border rounded-lg shadow-card overflow-hidden">
        {/* Email header */}
        <div className="px-6 py-4 border-b border-border bg-secondary/30">
          <div className="space-y-3">
            <div>
              <Label htmlFor="from" className="text-caption text-subtle">From:</Label>
              <Input
                id="from"
                type="email"
                placeholder="your.email@example.com"
                className="mt-1 text-caption"
                {...register("from")}
              />
              {errors.from && (
                <p className="text-xs text-destructive mt-1">{errors.from.message}</p>
              )}
            </div>
            
            <div>
              <Label className="text-caption text-subtle">To:</Label>
              <p className="text-caption text-emphasis font-medium mt-1">ask.christophe@regnau.lt</p>
            </div>
            
            <div>
              <Label htmlFor="subject" className="text-caption text-subtle">Subject:</Label>
              <Input
                id="subject"
                type="text"
                placeholder="Quick question"
                className="mt-1 text-caption"
                {...register("subject")}
              />
              {errors.subject && (
                <p className="text-xs text-destructive mt-1">{errors.subject.message}</p>
              )}
            </div>
          </div>
        </div>
        
        {/* Email body */}
        <div className="px-6 py-5">
          <div>
            <Label htmlFor="message" className="text-caption text-subtle">Message:</Label>
            <Textarea
              id="message"
              placeholder="Can you explain me how I can do a Digital Twin of myself?"
              className="mt-2 text-body min-h-[120px] resize-none"
              {...register("message")}
            />
            {errors.message && (
              <p className="text-xs text-destructive mt-1">{errors.message.message}</p>
            )}
          </div>
          
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full mt-4 bg-[#A0522D] hover:bg-[#8B4513] text-white"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Sending...
              </>
            ) : (
              <>
                <Send className="w-4 h-4 mr-2" />
                Send Question
              </>
            )}
          </Button>
        </div>
      </form>
      
      <p className="text-caption text-subtle text-center mt-4">
        Your question will be sent to ask.christophe@regnau.lt
      </p>
    </div>
  );
};

export default ContactForm;
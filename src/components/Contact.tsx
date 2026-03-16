import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import SendIcon from "@mui/icons-material/Send";

interface FormData {
  name: string;
  email: string;
  message: string;
}

function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [success, setSuccess] = useState<string>("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const templateParams = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };

    emailjs
      .send(
        "service_p0ud439",
        "template_t95b3ok",
        templateParams,
        "lpbQwCTX_SiT12ZAA",
      )
      .then(() => {
        setSuccess("Message sent successfully!");

        setFormData({
          name: "",
          email: "",
          message: "",
        });
      })
      .catch(() => {
        setSuccess("Failed to send message");
      });
  };

  return (
    <div style={styles.section}>
      <div style={styles.container}>
        <h1 style={styles.title}>Contact Me</h1>

        <p style={styles.subtitle}>
          Have a project idea or opportunity? Let's connect.
        </p>

        <Box component="form" onSubmit={sendEmail} style={styles.form}>
          <div style={styles.row}>
            <TextField
              name="name"
              label="Your Name"
              fullWidth
              value={formData.name}
              onChange={handleChange}
              sx={inputStyle}
            />

            <TextField
              name="email"
              label="Email / Phone"
              fullWidth
              value={formData.email}
              onChange={handleChange}
              sx={inputStyle}
            />
          </div>

          <TextField
            name="message"
            label="Message"
            multiline
            rows={6}
            fullWidth
            value={formData.message}
            onChange={handleChange}
            sx={inputStyle}
          />

          <Button
            type="submit"
            variant="contained"
            endIcon={<SendIcon />}
            sx={buttonStyle}
          >
            Send Message
          </Button>

          {success && <p style={styles.success}>{success}</p>}
        </Box>
      </div>
    </div>
  );
}

export default Contact;

const styles: React.CSSProperties | any = {
  section: {
    // background: "#000",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "80px 20px",
  },

  container: {
    maxWidth: "850px",
    width: "100%",
    padding: "50px",
    borderRadius: "12px",
    background: "#0a0a0a",
    boxShadow: "0 0 40px rgba(255,255,255,0.05)",
  },

  title: {
    color: "#fff",
    textAlign: "center",
    fontSize: "36px",
    marginBottom: "10px",
  },

  subtitle: {
    color: "#aaa",
    textAlign: "center",
    marginBottom: "40px",
  },

  form: {
    display: "flex",
    flexDirection: "column",
    gap: "25px",
  },

  row: {
    display: "flex",
    gap: "20px",
    flexWrap: "wrap",
  },

  success: {
    color: "#4CAF50",
    marginTop: "10px",
  },
};

const inputStyle = {
  input: {
    color: "#fff",
  },

  textarea: {
    color: "#fff",
  },

  label: {
    color: "#aaa",
  },

  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#fff",
    },

    "&:hover fieldset": {
      borderColor: "#fff",
    },

    "&.Mui-focused fieldset": {
      borderColor: "#fff",
    },
  },

  "& .MuiInputLabel-root.Mui-focused": {
    color: "#fff",
  },
};

const buttonStyle = {
  background: "#fff",
  color: "#000",
  padding: "12px",
  fontWeight: "600",

  "&:hover": {
    background: "#ddd",
  },
};

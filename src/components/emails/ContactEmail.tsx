import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Section,
  Text,
  Row,
  Column,
} from "@react-email/components";
import * as React from "react";

interface ContactEmailProps {
  name: string;
  email: string;
  phone?: string;
  city?: string;
  requirementType: string;
  date?: string;
  message: string;
}

export const ContactEmail = ({
  name,
  email,
  phone,
  city,
  requirementType,
  date,
  message,
}: ContactEmailProps) => {
  return (
    <Html>
      <Head />
      <Body style={main}>
        <Container style={container}>
          <Heading style={heading}>New Contact Form Submission</Heading>

          <Section style={section}>
            <Heading as="h2" style={subheading}>
              Contact Details
            </Heading>

            <Row style={row}>
              <Column style={labelColumn}>
                <Text style={label}>Name:</Text>
              </Column>
              <Column>
                <Text style={value}>{name}</Text>
              </Column>
            </Row>

            <Row style={row}>
              <Column style={labelColumn}>
                <Text style={label}>Email:</Text>
              </Column>
              <Column>
                <Text style={valueLink}>
                  <a href={`mailto:${email}`} style={link}>
                    {email}
                  </a>
                </Text>
              </Column>
            </Row>

            {phone && (
              <Row style={row}>
                <Column style={labelColumn}>
                  <Text style={label}>Phone:</Text>
                </Column>
                <Column>
                  <Text style={value}>{phone}</Text>
                </Column>
              </Row>
            )}

            {city && (
              <Row style={row}>
                <Column style={labelColumn}>
                  <Text style={label}>City:</Text>
                </Column>
                <Column>
                  <Text style={value}>{city}</Text>
                </Column>
              </Row>
            )}

            <Row style={row}>
              <Column style={labelColumn}>
                <Text style={label}>Requirement:</Text>
              </Column>
              <Column>
                <Text style={badge}>{requirementType}</Text>
              </Column>
            </Row>

            {date && (
              <Row style={row}>
                <Column style={labelColumn}>
                  <Text style={label}>Preferred Date:</Text>
                </Column>
                <Column>
                  <Text style={value}>
                    {new Date(date).toLocaleDateString("en-IN", {
                      dateStyle: "long",
                    })}
                  </Text>
                </Column>
              </Row>
            )}
          </Section>

          <Section style={messageSection}>
            <Heading as="h2" style={subheading}>
              Message
            </Heading>
            <Text style={messageText}>{message}</Text>
          </Section>

          <Section style={infoBox}>
            <Text style={infoText}>
              💡 <strong>Quick Action:</strong> Reply directly to this email to
              respond to {name}
            </Text>
          </Section>

          <Section style={footer}>
            <Text style={footerText}>Sent from chitraraman.co</Text>
            <Text style={footerText}>
              © {new Date().getFullYear()} Chitra Raman - Cultural Heritage
              Through Soft Toys
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

// Styles
const main = {
  backgroundColor: "#f5f5f5",
  fontFamily: "Arial, sans-serif",
};

const container = {
  backgroundColor: "#F8F4F0",
  margin: "0 auto",
  padding: "30px",
  borderRadius: "10px",
  maxWidth: "600px",
};

const heading = {
  color: "#C17817",
  fontSize: "24px",
  marginBottom: "20px",
  borderBottom: "2px solid #C17817",
  paddingBottom: "10px",
};

const section = {
  backgroundColor: "white",
  padding: "20px",
  borderRadius: "8px",
  marginBottom: "15px",
};

const subheading = {
  color: "#4A3929",
  fontSize: "18px",
  marginBottom: "15px",
};

const row = {
  marginBottom: "8px",
};

const labelColumn = {
  width: "140px",
  verticalAlign: "top",
};

const label = {
  color: "#6B5947",
  fontWeight: "bold",
  margin: "0",
};

const value = {
  color: "#4A3929",
  margin: "0",
};

const valueLink = {
  margin: "0",
};

const link = {
  color: "#C17817",
  textDecoration: "none",
};

const badge = {
  backgroundColor: "#FFF5E6",
  padding: "4px 12px",
  borderRadius: "15px",
  color: "#C17817",
  fontWeight: "600",
  display: "inline-block",
};

const messageSection = {
  backgroundColor: "white",
  padding: "20px",
  borderRadius: "8px",
  marginBottom: "15px",
};

const messageText = {
  color: "#4A3929",
  lineHeight: "1.6",
  whiteSpace: "pre-wrap" as const,
};

const infoBox = {
  marginTop: "20px",
  padding: "15px",
  backgroundColor: "#FFF5E6",
  borderRadius: "8px",
  borderLeft: "4px solid #C17817",
};

const infoText = {
  margin: "0",
  color: "#6B5947",
  fontSize: "14px",
};

const footer = {
  marginTop: "20px",
  textAlign: "center" as const,
};

const footerText = {
  color: "#8B7A6A",
  fontSize: "12px",
  margin: "5px 0",
};

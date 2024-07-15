import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";

function Asked() {
  const [expanded, setExpanded] = useState("panel3");

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className="flex justify-center flex-wrap mt-5 sm:mt-20">
      <div>
        <p className="text-5xl text-center py-6 text-brand">
          Frequently Asked Questions
        </p>
        <div className="max-w-[50rem]">
          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
          >
            <AccordionSummary
              expandIcon={<AddIcon className="customex" />}
              aria-controls="panel1-content"
              id="panel1-header"
              sx={{
                fontWeight: "400",
                letterSpacing: "0.05rem",
                fontSize: "23px",
                color: expanded === "panel1" ? "#2092CF" : "inherit",
              }}
            >
              How long does the registration process take?
            </AccordionSummary>
            <AccordionDetails sx={{ fontSize: "18px" }}>
              The registration process typically takes between 5-10 minutes. You
              will need to provide basic information and verify your email
              address.
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
          >
            <AccordionSummary
              expandIcon={<AddIcon className="customex" />}
              aria-controls="panel2-content"
              id="panel2-header"
              sx={{
                fontWeight: "400",
                letterSpacing: "0.05rem",
                fontSize: "23px",
                color: expanded === "panel2" ? "#2092CF" : "inherit",
              }}
            >
              Can I add or remove employees at any time?
            </AccordionSummary>
            <AccordionDetails sx={{ fontSize: "18px" }}>
              Yes, you can add or remove employees at any time through the
              employee management section in your account settings.
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
          >
            <AccordionSummary
              expandIcon={<AddIcon className="customex" />}
              aria-controls="panel3-content"
              id="panel3-header"
              sx={{
                fontWeight: "400",
                letterSpacing: "0.05rem",
                fontSize: "23px",
                color: expanded === "panel3" ? "#2092CF" : "inherit",
              }}
            >
              Is there a limit to the number of bookings I can receive?
            </AccordionSummary>
            <AccordionDetails sx={{ fontSize: "18px" }}>
              No, there is no limit to the number of bookings you can receive.
              Our system is designed to handle unlimited bookings efficiently.
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel4"}
            onChange={handleChange("panel4")}
          >
            <AccordionSummary
              expandIcon={<AddIcon className="customex" />}
              aria-controls="panel4-content"
              id="panel4-header"
              sx={{
                fontWeight: "400",
                letterSpacing: "0.05rem",
                fontSize: "23px",
                color: expanded === "panel4" ? "#2092CF" : "inherit",
              }}
            >
              Can I integrate the booking system with my existing website or
              software?
            </AccordionSummary>
            <AccordionDetails sx={{ fontSize: "18px" }}>
              Yes, our booking system can be easily integrated with your
              existing website or software using our API or available plugins.
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </div>
  );
}

export default Asked;

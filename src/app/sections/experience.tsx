import Section from "@/components/shared/section";
import {Accordion, AccordionItem} from "@/components/shared/collapsible";

export default function Experience() {
  return <Section
    heading={'Experience'}
  >
    <Accordion className="flex flex-col w-[calc(100%+16px)] -mx-2">
      <>
        <AccordionItem
          role={'S.E'}
          company={'NorthStudio'}
          range={'2020 - 2024'}
          description={'Description'}
          skills={['Writing', 'Reading']}
        />
        <div className="h-px bg-gray-12 w-[calc(100%-16px)] mx-auto" />
      </>
      <>
        <AccordionItem
          role={'S.E'}
          company={'DWS Cloud'}
          range={'2022 - 2023'}
          description={'Description'}
          skills={['Writing', 'Reading']}
        />
        <div className="h-px bg-gray-12 w-[calc(100%-16px)] mx-auto" />
      </>
      <>
        <AccordionItem
          role={'S.E'}
          company={'TimeBit Pte'}
          range={'2019 - 2020'}
          description={'Description'}
          skills={['Writing', 'Reading']}
        />
        <div className="h-px bg-gray-12 w-[calc(100%-16px)] mx-auto" />
      </>
    </Accordion>
  </Section>
}

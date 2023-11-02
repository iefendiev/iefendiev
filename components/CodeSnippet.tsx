import { PropsWithChildren } from 'react'
import TypeIt from 'typeit-react'

const variableClassName = 'text-[#F07178]'
const constructorClassName = 'text-[#82AAFF]'
const propertyClassName = 'text-[#EEFFFF]'
const stringValueClassName = 'text-[#C3E88D]'
const numberValueClassName = 'text-[#F78C6C]'
const keywordClassName = 'text-[#C792EA]'
const bracesClassName = 'text-[#EEFFFF]'
const equalSignClassName = 'text-[#C792EA]'
const colonClassName = 'text-[#89DDFF]'

const Variable = ({ children }: PropsWithChildren) => (
  <span className={variableClassName}>{children}</span>
)
interface ValueProps extends PropsWithChildren {
  isNumber?: boolean
}

const Value = ({ children, isNumber = false }: ValueProps) => (
  <span className={isNumber ? numberValueClassName : stringValueClassName}>
    {children}
  </span>
)
const Constructor = ({ children }: PropsWithChildren) => (
  <span className={constructorClassName}>{children}</span>
)
const Property = ({ children }: PropsWithChildren) => (
  <span className={propertyClassName}>{children}</span>
)
const Keyword = ({ children }: PropsWithChildren) => (
  <span className={keywordClassName}>{children}</span>
)
const SquareBraces = ({ children }: PropsWithChildren) => (
  <span className={bracesClassName}>{children}</span>
)
const Braces = ({ children }: PropsWithChildren) => (
  <span className={constructorClassName}>{children}</span>
)
const Mark = ({ children }: PropsWithChildren) => (
  <span className={colonClassName}>{children}</span>
)
const Indent = () => <span>&nbsp;&nbsp;</span>

const EqualSign = () => <span className={equalSignClassName}>=</span>
const Apostrophe = () => <span className={constructorClassName}>&apos;</span>

const CodeSnippet = () => {
  const fullName = 'Ipek Efendiev'
  const age = 26
  // const job = new Job('Frontend Developer', 'Izmir')
  const hobbies = ['Coding', 'Music', 'Movies']
  const techStack = {
    frontend: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    backend: ['Node.js', 'Express', 'Nest.js'],
    others: ['Git', 'GitHub', 'Agile', 'Cypress', 'CI/CD'],
  }

  // const aboutMe = {
  //   fullName,
  //   age,
  //   job,
  //   hobbies,
  //   techStack,
  // }

  // console.log(aboutMe)

  return (
    <div className="bg-[#212121] rounded-lg p-4 h-[600px] sm:h-[550px] w-full">
      <TypeIt
        options={{
          speed: 5,
        }}
      >
        <Keyword>const</Keyword> <Variable>fullName</Variable> <EqualSign />{' '}
        <Value>
          <Apostrophe />
          {fullName}
          <Apostrophe />
        </Value>
        <br />
        <Keyword>const</Keyword> <Variable>age</Variable> <EqualSign />{' '}
        <Value isNumber>{age}</Value>
        <br />
        <Keyword>const</Keyword> <Variable>job</Variable> <EqualSign />{' '}
        <Keyword>new</Keyword> <Constructor>Job</Constructor>
        <Braces>{`(`}</Braces>
        <Value>
          <Apostrophe />
          Frontend Developer
          <Apostrophe />
        </Value>
        <Mark>,</Mark>{' '}
        <Value>
          <Apostrophe />
          Izmir
          <Apostrophe />
        </Value>{' '}
        <Braces>{`)`}</Braces>
        <br />
        <Keyword>const</Keyword> <Variable>hobbies</Variable> <EqualSign />{' '}
        <SquareBraces>{`[`}</SquareBraces>
        {hobbies.map((hobby, index) => (
          <span key={index}>
            <Value>
              <Apostrophe />
              {hobby}
              <Apostrophe />
            </Value>
            {index !== hobbies.length - 1 && <Mark>, </Mark>}
          </span>
        ))}
        <SquareBraces>{`]`}</SquareBraces>
        <br />
        <Keyword>const</Keyword> <Variable>techStack</Variable> <EqualSign />{' '}
        {Object.entries(techStack).map(([key, value], index) => {
          const isFirstItem = index === 0
          const isLastItem = index === Object.keys(techStack).length - 1
          return (
            <span key={index}>
              {isFirstItem && <Braces>{`{`}</Braces>}
              <br />
              <Indent />
              <Property>{key}</Property>
              <Mark>:</Mark> <SquareBraces>[</SquareBraces>
              {value.map((tech, index) => (
                <span key={index}>
                  <Apostrophe />
                  <Value>{tech}</Value>
                  <Apostrophe />
                  {index !== value.length - 1 && <Mark>, </Mark>}
                </span>
              ))}
              <SquareBraces>]</SquareBraces>
              {isLastItem ? (
                <>
                  <br />
                  <Braces>{`}`}</Braces>
                </>
              ) : (
                <Mark>, </Mark>
              )}
            </span>
          )
        })}
        <br />
        <Keyword>const</Keyword> <Variable>aboutMe</Variable> <EqualSign />{' '}
        <Braces>{`{`}</Braces>
        <br />
        &nbsp;&nbsp;<Property>fullName</Property>,<br />
        &nbsp;&nbsp;<Property>age</Property>,<br />
        &nbsp;&nbsp;<Property>job</Property>,<br />
        &nbsp;&nbsp;<Property>hobbies</Property>,<br />
        &nbsp;&nbsp;<Property>techStack</Property>,<br />
        <Braces>{`}`}</Braces>
        <br />
        <br />
        <Property>console</Property>
        <Mark>.</Mark>
        <Constructor>log</Constructor>
        <Braces>(</Braces>
        <Property>aboutMe</Property>
        <Braces>)</Braces>
      </TypeIt>
    </div>
  )
}

export default CodeSnippet

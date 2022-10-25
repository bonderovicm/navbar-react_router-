import Typewriter from "typewriter-effect";

export default function About() {
  return (
    <>
      <div className="body-container">
        <div className="text-container">
          <Typewriter
            onInit={(typewriter) =>
              typewriter
                .typeString("Hello,")
                .pauseFor(500)
                .typeString(" my name is Martin")
                .pauseFor(1000)
                .pauseFor(500)
                .typeString(",and I am a web developer.")
                .pauseFor(600)
                .typeString(
                  "I love creating interactive websites that are pleasing to the eye."
                )
                .pauseFor(500)
                .typeString(
                  " As you can see, I am also very passionate about chess."
                )
                .start()
            }
          />
        </div>
        <div className="video-container">
  
        </div>
      </div>
    </>
  );
}

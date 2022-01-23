import React from "react";
import BlogHeader from "../../components/BlogHeader/BlogHeader";
import style from "../../styles/Flashcards.module.scss";
import wordList from "../../Assets/Data/Words";
import sentences from "../../Assets/Data/Sentences";
import { FlashcardArray } from "react-quizlet-flashcard";
import { useRouter } from "next/router";

export default function flashcards(props) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
  const { type } = router.query;

  return (
    <div className={style.flashcardsWrapper}>
      <BlogHeader />
      <div className={style.flashcardContainer}>
        {type === "words" && (
          <>
            {wordList.map((item, index) => {
              const cards = item.words.map((word, index) => {
                return {
                  id: item.postId + index,
                  front: word.word || word.Particles,
                  back: word.definition,
                };
              });

              return <FlashcardArray key={index} cards={cards} />;
            })}
          </>
        )}

        {type === "sentences" && (
          <>
            {sentences.map((item, index) => {
              const cards = item.sentences.map((sentence, index) => {
                return {
                  id: item.postId + index,
                  front: sentence.sentence,
                  back: sentence.meaning,
                };
              });

              return <FlashcardArray key={index} cards={cards} />;
            })}
          </>
        )}
      </div>
    </div>
  );
}

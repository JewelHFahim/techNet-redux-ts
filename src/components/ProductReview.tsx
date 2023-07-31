import { ChangeEvent, FormEvent, useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';
import { FiSend } from 'react-icons/fi';

import { useParams } from 'react-router-dom';
import { useGetCommentsQuery, usePostCommentMutation } from '@/redux/features/product/productApi';


export default function ProductReview() {
  const { id } = useParams();

  const [inputValue, setInputValue] = useState<string>('');
  const [postComment, { isLoading, isError, isSuccess }] =
    usePostCommentMutation();
  const { data } = useGetCommentsQuery(id, {refetchOnMountOrArgChange:true});

  console.log(inputValue);
  console.log(isLoading);
  console.log(isError);
  console.log(isSuccess);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const opstions = {
      id,
      data: { comment: inputValue },
    };
    postComment(opstions);
    setInputValue('');
  };

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="max-w-7xl mx-auto mt-5">
      <form className="flex gap-5 items-center" onSubmit={handleSubmit}>
        <Textarea
          className="min-h-[30px]"
          onChange={handleChange}
          value={inputValue}
        />
        <Button
          type="submit"
          className="rounded-full h-10 w-10 p-2 text-[25px]"
        >
          <FiSend />
        </Button>
      </form>
      <div className="mt-10">
        {data?.comments?.map((comment: string, index: number) => (
          <div key={index} className="flex gap-3 items-center mb-5">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <p>{comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

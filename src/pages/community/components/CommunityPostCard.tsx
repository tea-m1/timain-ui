import {cn} from "@/lib/utils";
import {Card, CardContent, CardHeader} from "@/components/ui/card";
import {Avatar, AvatarImage} from "@radix-ui/react-avatar";
import {MarkdownReader} from "@/features/wisiwig";
import {Tag} from "@/components/tag";

const text = `
<div><p>Writing a blog post is a little like driving; you can study the highway code (or read articles telling you how to write a blog post) for months, but nothing can prepare you for the real thing like getting behind the wheel and hitting the open road. Or something.</p>
<div><img fetchpriority="high" decoding="async" src="https://www.wordstream.com/wp-content/uploads/2021/07/how-to-write-a-blog-post-student-driver.jpg" alt="How to write a blog post student driving" width="600" height="275" class="aligncenter skip-lazy"></div>
<p class="text-align-center" style="text-align: center;"><em>"Wait for it. wait for it. BASS DROP."</em></p>
<p>Now that I'm done thoroughly mangling that vague metaphor, let's get down to business. You know you need to start blogging to grow your business, but you don't know how. In this post, I'll show you how to write a great blog post in five simple steps that people will actually want to read. Ready? Let's get started.</p>
<h3>How to Write a Blog Post in Five Easy Steps [Summary]:</h3>
<ol>
<li style="list-style-type: none;">
<ol>
<li><a href="#how-to-plan-a-blog-post">Step 1: Planning</a></li>
<li><a href="#write-your-headline">Step 2: Write your headline</a></li>
<li><a href="#how-to-write-a-blog-post">Step 3: Draft your post</a></li>
<li><a href="#how-to-use-images-in-a-blog-post">Step 4: Add images</a></li>
<li><a href="#how-to-edit-a-blog-post">Step 5: </a><a href="https://www.wordstream.com/blog/ws/2019/04/10/content-style-guide">Edit your blog post</a></li>
</ol>
</li>
</ol>
<ol></ol>
<p>Now let's review each step in more detail.</p>
<h2>How to Write a Blog Post, Step 1: Planning</h2>
<p>First, a disclaimer - the entire process of writing a <a href="https://www.wordstream.com/blog/ws/2022/01/05/blog-post-templates">blog post</a> often takes more than a couple of hours, even if you can type eighty words per minute and your <a href="/blog/ws/2014/08/07/improve-writing-skills">writing skills</a> are sharp. From the seed of the <a href="https://www.wordstream.com/blog/ws/2022/07/27/blog-post-ideas">blog post idea</a> to finally hitting "Publish," you might spend several days or maybe even a week "writing" a blog post, but it's important to spend those vital hours planning your post and even thinking about your post (yes, thinking counts as working if you're a blogger) before you actually write it.</p>
<p class="text-align-center" style="text-align: center;"><em>Does your blog post have enough circles and crosses?</em></p>
<p>Long before you sit down to put digital pen to paper, you need to make sure you have everything you need to sit down and write. Many new bloggers overlook the planning process, and while you might be able to get away with skipping the planning stage, doing your homework will actually save you time further down the road and help you develop good blogging habits.</p>
<div class="et-box et-shadow">
</div>
`;

export interface CommunityPostCardProps {
  className?: string;
}

export const CommunityPostCard: React.FC<CommunityPostCardProps> = ({
  className = "",
  ...props
}) => {
  return (
    <Card className={cn("w-[50rem]", className)} {...props}>
      <CardHeader className="border-b-grey flex-row items-center gap-4 border-b">
        <Avatar className="h-16 w-16">
          <AvatarImage
            className="rounded-full"
            src="https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/8c/8c85d02b5f9aa5395454f9f783b1001ac411ca96_full.jpg"
          />
        </Avatar>
        <div className="flex-1 space-y-1">
          <p className="text-md font-medium leading-none">Yume</p>
          <p className="text-sm text-muted-foreground">
            {new Date().toLocaleString()}
          </p>
        </div>
      </CardHeader>

      <CardContent className="grid gap-4">
        <div className="flex flex-wrap gap-x-2 py-3">
          <Tag tag="moka" />
          <Tag tag="moka" />
          <Tag tag="moka" />
          <Tag tag="moka" />
          <Tag tag="moka" />
          <Tag tag="moka" />
          <Tag tag="moka" />
          <Tag tag="moka" />
          <Tag tag="moka" />
          <Tag tag="moka" />
          <Tag tag="moka" />
          <Tag tag="moka" />
          <Tag tag="moka" />
          <Tag tag="tsymocka" />
        </div>
        <MarkdownReader>{text}</MarkdownReader>
      </CardContent>
    </Card>
  );
};

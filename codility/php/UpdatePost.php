<?php
// Update post with multiple exception handlers

declare(strict_types=1);

namespace App;


class UpdatePostHandler
{
    private EventDispatcher $eventDispatcher;
    private PostUpdater $postUpdater;

    public function __construct(EventDispatcher $eventDispatcher, PostUpdater $postUpdater)
    {
        $this->eventDispatcher = $eventDispatcher;
        $this->postUpdater = $postUpdater;
    }

    /**
     * @throws FailedToUpdatePost
     * @throws PostDoesNotExist
     * @throws TitleTooLong
     **/
    public function handle(UpdatePost $command): void
    {
        //implement the handler here, do not change anything outside of this method's body!
        $postId = $command->getPostId();
        $userId = $command->getUserId();
        $title = $command->getTitle();
        $content = $command->getContent();

        try {
            $blogPost = new BlogPost($postId, $title, $content);
            $this->postUpdater->update($blogPost);
        } catch (TitleTooLong $e) {
            throw new TitleTooLong($e->getMessage());
        } catch (PostDoesNotExist $e) {
            throw new PostDoesNotExist($e->getMessage());
        } catch (PostBlockedForEditing $e) {
            throw new FailedToUpdatePost($e->getMessage());
        } catch (\Throwable $t) {
            throw new FailedToUpdatePost($t->getMessage());
        } catch (Exception $e) {
            throw new FailedToUpdatePost($e->getMessage());
        }

        $event = new PostUpdated($postId, $userId);
        $this->eventDispatcher->dispatch($event);
    }
}

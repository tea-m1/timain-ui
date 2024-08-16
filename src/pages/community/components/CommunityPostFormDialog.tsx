import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {CommunityPostForm} from "./CommunityPostForm";

export interface CommunityPostFormDialogProps {
  trigger: React.ReactNode;
  mode: "Create" | "Edit";
  base?: {
    id: string;
  };
}

export const CommunityPostFormDialog: React.FC<
  CommunityPostFormDialogProps
> = ({trigger, mode, base}) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="max-w-3xl">
        <DialogHeader className="mb-2">
          <DialogTitle>
            {mode === "Create" ? "Créer" : "Modifier"} une publication
          </DialogTitle>
          <DialogDescription>Partagez avec notre communauté!</DialogDescription>
        </DialogHeader>

        <CommunityPostForm base={base} />
      </DialogContent>
    </Dialog>
  );
};

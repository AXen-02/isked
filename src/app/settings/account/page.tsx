import { Separator } from "@/components/ui/separator";
import { AccountForm } from "./account-form";
import { AccountsForm } from "./accounts-form";

export default function SettingsAccountPage() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Personal Account</h3>
        <p className="text-sm text-muted-foreground">
          Update your account settings. Set your username and roles.
        </p>
      </div>
      <AccountForm />
      <Separator />
      <div>
        <h3 className="text-lg font-medium">Your Accounts</h3>
        <p className="text-sm text-muted-foreground">
          Choose an account to modify.
        </p>
      </div>
      <AccountsForm />
    </div>
  );
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using Xamarin.Forms;
using Xamarin.Forms.Xaml;

namespace Mobile
{
    [XamlCompilation(XamlCompilationOptions.Compile)]
    public partial class Selectaremodcontrol : ContentPage
    {
        public Selectaremodcontrol()
        {
            InitializeComponent();
        }

        private async void Button_Validare(object sender, EventArgs e)
        {

            if (controlmanual.IsChecked)
            {
                await DisplayAlert("", "Ati selectat controlul manual", "OK");
                
                await Navigation.PushAsync(new Controlmanual());
            }
            if (controlautomat.IsChecked)
            {
                await DisplayAlert("", "Ati selectat controlul automat", "OK");
                await Navigation.PushAsync(new Page2()); }
        }
    }
}
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
    public partial class Detaliitransport : ContentPage
    {
        public Detaliitransport()
        {
            InitializeComponent();
        }

        private async void Button_inapoi_la_meniu(object sender, EventArgs e)
        {
            await Navigation.PushAsync(new Page2());
        }
    }
}